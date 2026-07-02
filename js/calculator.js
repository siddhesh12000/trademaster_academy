// calculator.js - Trading calculators

document.addEventListener('DOMContentLoaded', () => {
    // Risk Calculator
    window.calculateRisk = (accountSize, riskPercent, stopLossPips) => {
        if(!accountSize || !riskPercent || !stopLossPips) return 0;
        const riskAmount = accountSize * (riskPercent / 100);
        // Assuming $10 per pip for standard lot for simplicity in UI mock
        const lotSize = riskAmount / (stopLossPips * 10);
        return { riskAmount, lotSize };
    };
});
