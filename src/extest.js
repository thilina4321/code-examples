b.forEach((element) => {
    const mainCat = element["ProductMainCategory"];
    const subCat = element["ProductSubCategory"];
    const proHead = element["ProductHead"];

    if (mainCat === "Interest Rates (Local)") {
      if (subCat === "Term Deposits  Rates") {
        interestRatesLocal["term_and_deposite"].push({
          productHead: element["ProductHead"],
          rateCode: element["RateCode"],
          slabAmount: element["SlabAmount"],
        });
      }
      if (subCat === "Treasury Bills & REPO Rates") {
        interestRatesLocal["treasury_bills_and_repo_rates"].push({
          productHead: element["ProductHead"],
          rateCode: element["RateCode"],
          slabAmount: element["SlabAmount"],
        });
      }

      if (subCat === "Saving Rates") {
        interestRatesLocal["savings_rate"].push({
          productHead: element["ProductHead"],
          rateCode: element["RateCode"],
          slabAmount: element["SlabAmount"],
        });
      }
    }
  });
  return { local: interestRatesLocal, fore: {} };