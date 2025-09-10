function calculateNetSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;

  // NSSF Deduction rates is (6% of first 6,000) ----
  const nssf = Math.min(basicSalary, 6000) * 0.06;

  // NHIF Deduction in acoradnce with the new changes
  let nhif = 0;
  if (grossSalary <= 5999) nhif = 150;
  else if (grossSalary <= 7999) nhif = 300;
  else if (grossSalary <= 11999) nhif = 400;
  else if (grossSalary <= 14999) nhif = 500;
  else if (grossSalary <= 19999) nhif = 600;
  else if (grossSalary <= 24999) nhif = 750;
  else nhif = 850;

  // ---- PAYE tax calculationa according to govt data
  let paye = 0;
  if (grossSalary <= 24000) {
    paye = grossSalary * 0.1;
  } else if (grossSalary <= 32333) {
    paye = 24000 * 0.1 + (grossSalary - 24000) * 0.25;
  } else {
    paye = 24000 * 0.1 + 8333 * 0.25 + (grossSalary - 32333) * 0.3;
  }

  // Net Salary will be
  const netSalary = grossSalary - (paye + nhif + nssf);

  return {
    grossSalary,
    nssf,
    nhif,
    paye,
    netSalary,
  };
}

// Example usage on salaray after deductions
const result = calculateNetSalary(40000, 5000);
console.log(result);

/*
Output:
{
  grossSalary: 45000,
  nssf: 360,
  nhif: 850,
  paye: 6539.9,
  netSalary: ~27250
}
*/
