import React from "react";
import { cn } from "@/lib/utils";

const StatCard = ({ 
    icon: Icon, 
    label, 
    value, 
    trend, 
    trendUp, 
    gradientFrom = "from-purple-500/20", 
    gradientTo = "to-purple-500/5",
    iconColor = "text-purple-400",
    className 
}) => {
    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-2xl p-6",
                "bg-gradient-to-br",
                gradientFrom,
                gradientTo,
                "border border-white/10",
                "backdrop-blur-xl",
                "transition-all duration-300",
                "hover:scale-[1.02] hover:border-white/20",
                "hover:shadow-lg hover:shadow-purple-500/10",
                "group",
                className
            )}
        >
            {/* Background Glow Effect */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Icon */}
            <div className={cn(
                "inline-flex items-center justify-center w-12 h-12 rounded-xl",
                "bg-white/5 border border-white/10",
                "mb-4"
            )}>
                {Icon && <Icon className={cn("w-6 h-6", iconColor)} />}
            </div>
            
            {/* Value */}
            <div className="relative">
                <h3 className="text-3xl font-bold text-white mb-1">
                    {value}
                </h3>
                
                {/* Label */}
                <p className="text-sm text-gray-400 font-medium">
                    {label}
                </p>
                
                {/* Trend */}
                {trend && (
                    <div className={cn(
                        "inline-flex items-center gap-1 mt-2 px-2 py-1 rounded-full text-xs font-medium",
                        trendUp 
                            ? "bg-green-500/20 text-green-400" 
                            : "bg-red-500/20 text-red-400"
                    )}>
                        {trendUp ? "↑" : "↓"} {trend}
                    </div>
                )}
            </div>
        </div>
    );
};

export default StatCard;
