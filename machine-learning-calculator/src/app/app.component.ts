import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  truePositive = 10; // True Positive
  trueNegative = 0; // True Negative
  falsePositive = 0; // False Positive
  falseNegative = 0; // False Negative


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'machine-learning-calculator';

  // calculate sensitivity
  private calculateSensitivity(truePositive: number, falseNegative: number) {
    const sensitivity = truePositive / (truePositive + falseNegative);
    return sensitivity;
  }

  // calculate specificity
  private calculateSpecificity(trueNegative: number, falsePositive: number) {
    return trueNegative / (trueNegative + falsePositive);
  }

  // calculate precision
  private calculatePrecision(truePositive: number, falsePositive: number) {
    return truePositive / (truePositive + falsePositive);
  }

  // calculate false positive rate
  private calculateFalsePositiveRate(falsePositive: number, trueNegative: number) {
    return falsePositive / (falsePositive + trueNegative);
  }

  // calculate negative predictive value
  private calculateNegativePredictiveValue(trueNegative: number, falseNegative: number) {
    return trueNegative / (trueNegative + falseNegative);
  }

  // calculate false discovery rate
  private calculateFalseDiscoveryRate(falsePositive: number, truePositive: number) {
    return falsePositive / (falsePositive + truePositive);
  }

  // calculate false negative rate
  private calculateFalseNegativeRate(falseNegative: number, truePositive: number) {
    return falseNegative / (falseNegative + truePositive);
  }

  // calculate accuracy
  private calculateAccuracy(truePositive: number, trueNegative: number, falsePositive: number, falseNegative: number) {
    return (truePositive + trueNegative) / (truePositive + trueNegative + falsePositive + falseNegative);
  }

  // calculate f1 score
  private calculateF1Score(truePositive: number, falsePositive: number, falseNegative: number) {
    return 2 * truePositive / (2 * truePositive + falsePositive + falseNegative);
  }

  // calculate Matthews Correlation Coefficient
  private calculateMatthewsCorrelationCoefficient(truePositive: number, trueNegative: number, falsePositive: number, falseNegative: number) {
    return (truePositive * trueNegative - falsePositive * falseNegative) / Math.sqrt((truePositive + falsePositive) * (truePositive + falseNegative) * (trueNegative + falsePositive) * (trueNegative + falseNegative));
  }

}





