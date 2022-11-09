import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'machine-learning-calculator';
}

const truePositive = 10; // True Positive
const trueNegative = 0; // True Negative
const falsePositive = 0; // False Positive
const falseNegative = 0; // False Negative


// calculate sensitivity
function calculateSensitivity(truePositive: number, falseNegative: number) {
  return truePositive / (truePositive + falseNegative);
}

// calculate specificity
function calculateSpecificity(trueNegative: number, falsePositive: number) {
  return trueNegative / (trueNegative + falsePositive);
}

// calculate precision
function calculatePrecision(truePositive: number, falsePositive: number) {
  return truePositive / (truePositive + falsePositive);
}

// calculate false positive rate
function calculateFalsePositiveRate(falsePositive: number, trueNegative: number) {
  return falsePositive / (falsePositive + trueNegative);
}

// calculate negative predictive value
function calculateNegativePredictiveValue(trueNegative: number, falseNegative: number) {
  return trueNegative / (trueNegative + falseNegative);
}

// calculate false discovery rate
function calculateFalseDiscoveryRate(falsePositive: number, truePositive: number) {
  return falsePositive / (falsePositive + truePositive);
}

// calculate false negative rate
function calculateFalseNegativeRate(falseNegative: number, truePositive: number) {
  return falseNegative / (falseNegative + truePositive);
}

// calculate accuracy
function calculateAccuracy(truePositive: number, trueNegative: number, falsePositive: number, falseNegative: number) {
  return (truePositive + trueNegative) / (truePositive + trueNegative + falsePositive + falseNegative);
}

// calculate f1 score
function calculateF1Score(truePositive: number, falsePositive: number, falseNegative: number) {
  return 2 * truePositive / (2 * truePositive + falsePositive + falseNegative);
}

// calculate Matthews Correlation Coefficient
function calculateMatthewsCorrelationCoefficient(truePositive: number, trueNegative: number, falsePositive: number, falseNegative: number) {
  return (truePositive * trueNegative - falsePositive * falseNegative) / Math.sqrt((truePositive + falsePositive) * (truePositive + falseNegative) * (trueNegative + falsePositive) * (trueNegative + falseNegative));
}

