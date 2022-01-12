b.forEach((element) => {
    const mainCat = element["ProductMainCategory"];
    const subCat = element["ProductSubCategory"];

    if (mainCat === "Interest Rates (Local)") {
      if (subCat === "Term Deposits  Rates") {
        interestRatesLocal["term_and_deposite"].push({
          productHead: element["ProductHead"],
          withEfectFrom: element["WithEfectFrom"],
          productOrder: element["ProductOrder"],
          comment: element["Comment"],
          rateCode: element["RateCode"],
          slabAmount: element["SlabAmount"],
        });
      }
      if (subCat === "Treasury Bills & REPO Rates") {
        if (element["ProductHead"] === "Treasury Bill Rates") {
          const one = element["SlabAmount"].filter(
            (el) => el["Period"] == "91"
          );
          const two = element["SlabAmount"].filter(
            (el) => el["Period"] == "182"
          );
          const three = element["SlabAmount"].filter(
            (el) => el["Period"] == "364"
          );

          const oneBill = {};
          const twoBill = {};
          const threeBill = {};

          one.forEach((element) => {
            const amount = element["BeginSlbAmount"];
            const rate = element["Rate"];
            oneBill[amount] = rate;
          });

          two.forEach((element) => {
            const amount = element["BeginSlbAmount"];
            const rate = element["Rate"];
            twoBill[amount] = rate;
          });

          three.forEach((element) => {
            const amount = element["BeginSlbAmount"];
            const rate = element["Rate"];
            threeBill[amount] = rate;
          });

          interestRatesLocal["treasury_bills_and_repo_rates"].push({
            productHead: element["ProductHead"],
            withEfectFrom: element["WithEfectFrom"],
            productOrder: element["ProductOrder"],
            comment: element["Comment"],
            rateCode: element["RateCode"],
            slabAmount: [
              { ...oneBill, period: "91" },
              { ...twoBill, period: "182" },
              { ...threeBill, period: "364" },
            ],
          });
        }

        if (element["ProductHead"] === "Repo Rates") {
          const one = element["SlabAmount"].filter(
            (el) => el["BeginSlbAmount"] == "10000"
          );
          const two = element["SlabAmount"].filter(
            (el) => el["BeginSlbAmount"] == "500000"
          );
          const three = element["SlabAmount"].filter(
            (el) => el["BeginSlbAmount"] == "1000000"
          );

          const oneBill = {};
          const twoBill = {};
          const threeBill = {};

          one.forEach((element) => {
            const amount = element["Period"];
            const rate = element["Rate"];
            oneBill[amount] = rate;
          });

          two.forEach((element) => {
            const amount = element["Period"];
            const rate = element["Rate"];
            twoBill[amount] = rate;
          });

          three.forEach((element) => {
            const amount = element["Period"];
            const rate = element["Rate"];
            threeBill[amount] = rate;
          });

          interestRatesLocal["treasury_bills_and_repo_rates"].push({
            productHead: element["ProductHead"],
            withEfectFrom: element["WithEfectFrom"],
            productOrder: element["ProductOrder"],
            comment: element["Comment"],
            rateCode: element["RateCode"],
            slabAmount: [
              { ...oneBill, amount: "10000" },
              { ...twoBill, amount: "500000" },
              { ...threeBill, amount: "1000000" },
            ],
          });
        }
      }

      if (subCat === "Saving Rates") {
        element["SlabAmount"].forEach((element) => {
          if (element["SlabPicture"].includes("<BEGIN_SLAB_AMT>")) {
            element["SlabPicture"] = element["SlabPicture"].replace(
              "<BEGIN_SLAB_AMT>",
              element["BeginSlbAmount"]
            );
          }
          if (element["SlabPicture"].includes("<END_SLAB_AMT>")) {
            element["SlabPicture"] = element["SlabPicture"].replace(
              "<END_SLAB_AMT>",
              element["EndSlbAmount"]
            );
          }
        });

        interestRatesLocal["savings_rate"].push({
          productHead: element["ProductHead"],
          withEfectFrom: element["WithEfectFrom"],
          productOrder: element["ProductOrder"],
          comment: element["Comment"],
          rateCode: element["RateCode"],
          slabAmount: element["SlabAmount"],
        });
      }
    }
  });
  return { local: interestRatesLocal, foreign: {} };