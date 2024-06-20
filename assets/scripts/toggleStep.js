function toggleStep(stepNumber) {
    const stepElement = document.querySelector(`.infographic-step:nth-child(${stepNumber}) .info-box`);
    stepElement.classList.toggle('show');
}
