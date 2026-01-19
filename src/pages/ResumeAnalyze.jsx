
import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
// import { ICONS } from '../constants';
import { analyzeResume } from '../services/geminiServices';
import mammoth from 'mammoth';
import {
    RadialBarChart,
    RadialBar,
    ResponsiveContainer,
    Cell
} from 'recharts';
import { Cpu, FileText, ShieldCheck, TrendingUp } from 'lucide-react';

const ResumeAnalyzer= () => {
    const location = useLocation();
    const incomingJob = location.state?.job;

    const [resumeText, setResumeText] = useState('');

    const [fileData, setFileData] = useState(null);
    const [targetJobTitle, setTargetJobTitle] = useState(incomingJob?.title || "");
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");
    const fileInputRef = useRef(null);


    const fileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const base64String = (reader.result).split(',')[1];
                resolve(base64String);
            };
            reader.onerror = (error) => reject(error);
        });
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setError('');
        const mimeType = file.type;
        const fileName = file.name;

        try {
            if (mimeType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
                const arrayBuffer = await file.arrayBuffer();
                const result = await mammoth.extractRawText({ arrayBuffer });
                setResumeText(result.value);
                setFileData(null);
            }
            else if (mimeType === 'text/plain' || mimeType === 'text/markdown') {
                const text = await file.text();
                setResumeText(text);
                setFileData(null);
            }
            else if (mimeType === 'application/pdf' || mimeType.startsWith('image/')) {
                const base64 = await fileToBase64(file);
                setFileData({ data: base64, mimeType, name: fileName });
                setResumeText('');
            } else {
                setError('Unsupported file type. Please upload PDF, Word, Image, or Text files.');
            }
        } catch (err) {
            console.error("File processing error:", err);
            setError('Error processing file. Please try another file.');
        }
    };

    const handleAnalyze = async () => {
        if (!resumeText && !fileData) {
            setError('Please upload a resume file or paste resume content.');
            return;
        }

        setIsAnalyzing(true);
        setError('');
        setResult(null);

        const jobContext = incomingJob ? {
            title: incomingJob.title,
            company: incomingJob.company,
            description: incomingJob.description,
            requirements: incomingJob.requirements
        } : targetJobTitle ? {
            title: targetJobTitle,
            company: 'Specified Company',
            description: 'General position analysis',
            requirements: 'General professional skills'
        } : undefined;

        const input = fileData
            ? { file: { data: fileData.data, mimeType: fileData.mimeType } }
            : { text: resumeText };

        try {
            const analysis = await analyzeResume(input, jobContext);
            setResult(analysis);
        } catch (err) {
            setError('Failed to analyze resume. Please ensure you have a valid API key or try again.');
        } finally {
            setIsAnalyzing(false);
        }
    };

    const scoreData = result ? [{ name: 'Score', value: result.score }] : [];

    const removeFile = () => {
        setFileData(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    return (
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
            <div className="text-center mb-10 md:mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                    <Cpu /> AI Resume Matching
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
                    {incomingJob ? 'AI Match Analysis' : 'Resume Analyzer'}
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
                    {incomingJob
                        ? `Analyzing your resume for the ${incomingJob.title} position at ${incomingJob.company}.`
                        : 'Upload your resume (PDF, Word, JPG, PNG) and get instant feedback with actionable suggestions.'}
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
                <div className="space-y-6 md:space-y-8">
                    {incomingJob && (
                        <div className="glass-effect p-5 md:p-6 rounded-2xl md:rounded-3xl border border-purple-500/30 bg-purple-500/5">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl p-2 flex items-center justify-center">
                                    <img src={incomingJob.logoUrl} alt={incomingJob.company} className="max-h-full max-w-full object-contain" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm md:text-base">{incomingJob.title}</h4>
                                    <p className="text-[10px] md:text-xs text-purple-400">{incomingJob.company} • {incomingJob.location}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="glass-effect p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/10">
                        <h3 className="text-lg md:text-xl font-bold mb-6 flex items-center gap-2">
                            <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm">1</span>
                            Upload Resume
                        </h3>

                        <div className="mb-6">
                            <div className="relative border-2 border-dashed border-white/10 rounded-xl p-6 md:p-8 text-center hover:border-purple-500/50 transition-colors group">
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    accept=".pdf,.docx,.jpg,.jpeg,.png,.txt,.md"
                                    onChange={handleFileUpload}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                />
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-2">
                                        <FileText />
                                    </div>
                                    <p className="text-sm font-semibold text-white">Choose a file</p>
                                    <p className="mt-1 text-[10px] md:text-xs text-gray-500">PDF, Word, JPG, PNG, TXT (Max 5MB)</p>
                                </div>
                            </div>

                            {fileData && (
                                <div className="mt-4 flex items-center justify-between p-3 bg-white/5 border border-purple-500/20 rounded-xl">
                                    <div className="flex items-center gap-3 overflow-hidden">
                                        <div className="shrink-0 p-2 bg-purple-500/20 rounded-lg">
                                            <FileText />
                                        </div>
                                        <span className="text-xs md:text-sm font-medium truncate text-purple-300">{fileData.name}</span>
                                    </div>
                                    <button onClick={removeFile} className="p-1.5 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                    </button>
                                </div>
                            )}
                        </div>

                        {!fileData && (
                            <>
                                <div className="relative mb-6">
                                    <div className="absolute inset-0 flex items-center">
                                        <span className="w-full border-t border-white/10"></span>
                                    </div>
                                    <div className="relative flex justify-center text-[10px] uppercase">
                                        <span className="bg-[#030014] px-2 text-gray-500">Or paste text</span>
                                    </div>
                                </div>

                                <textarea
                                    rows={6}
                                    value={resumeText}
                                    onChange={(e) => setResumeText(e.target.value)}
                                    placeholder="Paste your resume content here..."
                                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 text-sm leading-relaxed"
                                ></textarea>
                            </>
                        )}
                    </div>

                    {!incomingJob && (
                        <div className="glass-effect p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/10">
                            <h3 className="text-lg md:text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm">2</span>
                                Target Position
                            </h3>
                            <input
                                type="text"
                                value={targetJobTitle}
                                onChange={(e) => setTargetJobTitle(e.target.value)}
                                placeholder="e.g. Senior Frontend Developer"
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 mb-6 text-sm"
                            />
                        </div>
                    )}

                    <button
                        onClick={handleAnalyze}
                        disabled={isAnalyzing}
                        className={`w-full py-3 md:py-4 purple-gradient rounded-xl font-bold text-base md:text-lg hover:shadow-[0_0_20px_-5px_#8b5cf6] transition-all flex items-center justify-center gap-3 ${isAnalyzing ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {isAnalyzing ? (
                            <>
                                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white"></div>
                                Analyzing Profile...
                            </>
                        ) : (
                            <>
                                <Cpu />
                                {incomingJob ? 'Calculate Match Score' : 'Analyze Resume'}
                            </>
                        )}
                    </button>
                    {error && <p className="mt-4 text-red-400 text-xs md:text-sm text-center font-medium">{error}</p>}
                </div>

                <div className="space-y-6 md:space-y-8">
                    {!result && !isAnalyzing && (
                        <div className="h-full min-h-[400px] glass-effect rounded-2xl md:rounded-3xl border border-white/5 flex flex-col items-center justify-center p-8 md:p-12 text-center opacity-50">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
                                <TrendingUp />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-2">Awaiting Input</h3>
                            <p className="text-sm text-gray-400">Provide your resume to get your {incomingJob ? 'match score' : 'analysis'}.</p>
                        </div>
                    )}

                    {isAnalyzing && (
                        <div className="h-full min-h-[400px] glass-effect rounded-2xl md:rounded-3xl border border-white/5 flex flex-col items-center justify-center p-8 md:p-12 text-center">
                            <div className="w-20 h-20 md:w-24 md:h-24 relative mb-8">
                                <div className="absolute inset-0 rounded-full border-4 border-purple-500/20"></div>
                                <div className="absolute inset-0 rounded-full border-4 border-t-purple-500 animate-spin"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Cpu />
                                </div>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-2">Your resume is Reviewing</h3>
                            <p className="text-sm text-gray-400 animate-pulse">Scanning skills, experience, and tailoring suggestions...</p>
                        </div>
                    )}

                    {result && (
                        <div className="space-y-6">
                            <div className="glass-effect p-6 md:p-8 rounded-2xl md:rounded-3xl border border-purple-500/20 relative overflow-hidden bg-gradient-to-br from-purple-500/5 to-transparent">
                                <div className="absolute top-0 right-0 p-6 md:p-8 opacity-10">
                                    <TrendingUp />
                                </div>

                                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10">
                                    <div className="w-28 h-28 md:w-32 md:h-32 flex-shrink-0 relative">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <RadialBarChart
                                                innerRadius="80%"
                                                outerRadius="100%"
                                                data={scoreData}
                                                startAngle={90}
                                                endAngle={-270}
                                            >
                                                <RadialBar
                                                    background
                                                    dataKey="value"
                                                    cornerRadius={10}
                                                >
                                                    <Cell fill={result.score > 75 ? "#10b981" : result.score > 50 ? "#a855f7" : "#ef4444"} />
                                                </RadialBar>
                                            </RadialBarChart>
                                        </ResponsiveContainer>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <span className="text-2xl md:text-3xl font-extrabold text-white leading-none">{result.score}</span>
                                            <span className="text-[8px] md:text-[10px] text-gray-400 uppercase tracking-tighter mt-1">Match %</span>
                                        </div>
                                    </div>

                                    <div className="text-center md:text-left">
                                        <h3 className="text-xl md:text-2xl font-extrabold mb-2">
                                            {incomingJob ? 'Match Found!' : 'Analysis Done'}
                                        </h3>
                                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4">{result.summary}</p>
                                        <div className="flex justify-center md:justify-start gap-2">
                                            <span className={`px-3 py-1 rounded-full text-[10px] md:text-xs font-bold border ${result.score > 75
                                                    ? 'bg-green-500/10 text-green-400 border-green-500/20'
                                                    : 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                                                }`}>
                                                {result.score > 80 ? 'Highly Qualified' : result.score > 60 ? 'Good Match' : 'Potential Gap'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                <div className="glass-effect p-5 md:p-6 rounded-2xl md:rounded-3xl border border-white/10">
                                    <h3 className="text-[10px] md:text-xs font-bold mb-4 flex items-center gap-2 text-green-400 uppercase tracking-wider">
                                        <ShieldCheck /> Matching Skills
                                    </h3>
                                    <div className="flex flex-wrap gap-1.5">
                                        {result.detectedSkills.map((skill, i) => (
                                            <span key={i} className="px-2 py-0.5 rounded-md bg-green-500/5 border border-green-500/10 text-[9px] md:text-[10px] text-green-300">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="glass-effect p-5 md:p-6 rounded-2xl md:rounded-3xl border border-white/10">
                                    <h3 className="text-[10px] md:text-xs font-bold mb-4 flex items-center gap-2 text-red-400 uppercase tracking-wider">
                                        <Cpu /> Potential Gaps
                                    </h3>
                                    <div className="flex flex-wrap gap-1.5">
                                        {result.missingSkills.map((skill, i) => (
                                            <span key={i} className="px-2 py-0.5 rounded-md bg-red-500/5 border border-red-500/10 text-[9px] md:text-[10px] text-red-300">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="glass-effect p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/10">
                                <h3 className="text-base md:text-lg font-bold mb-4 flex items-center gap-2 text-purple-400">
                                    <TrendingUp /> AI Career Coach Advice
                                </h3>
                                <ul className="space-y-3">
                                    {result.suggestions.map((suggestion, i) => (
                                        <li key={i} className="text-xs md:text-sm text-gray-300 flex gap-3">
                                            <span className="text-purple-500 font-bold shrink-0 mt-0.5">•</span>
                                            {suggestion}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ResumeAnalyzer;
