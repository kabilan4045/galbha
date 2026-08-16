// Real product catalogue for the /products listing page.
// Composition wording follows client-approved packaging artwork wherever the packaging
// and the source spreadsheet disagreed — see the inline notes below. Those conflicts are
// flagged for the client to confirm, not silently resolved.

// Product photos are matched to brand names by a normalized (uppercase, alphanumeric-only)
// comparison, so filename spacing/hyphens/underscores/parentheses don't need to match exactly.
const productImageModules = import.meta.glob('../assets/products/*.png', {
  eager: true,
  import: 'default',
});

function normalizeName(value) {
  return value.toUpperCase().replace(/[^A-Z0-9]/g, '');
}

const productImagesByName = Object.fromEntries(
  Object.entries(productImageModules).map(([path, url]) => {
    const filename = path.split('/').pop().replace(/\.png$/i, '');
    return [normalizeName(filename), url];
  })
);

function findProductImage(brand) {
  return productImagesByName[normalizeName(brand)] ?? null;
}

const rawProducts = [
  { brand: 'FAROCON 300', composition: 'Faropenem Sodium Extended Release Tablets' },
  { brand: 'CEFUGAL 250', composition: 'Cefuroxime Axetil Tablets IP 250mg' },
  { brand: 'CEFUGAL 500', composition: 'Cefuroxime Axetil Tablets IP 500mg' },
  { brand: 'CEFUGAL CV 500', composition: 'Cefuroxime Axetil & Potassium Clavulanate Tablets IP 500mg' },
  { brand: 'CEOFLON', composition: 'Cefixime 200mg and Ofloxacin 200mg Tablets' },
  { brand: 'CEOFLON CV', composition: 'Cefpodoxime Proxetil 200mg and Potassium Clavulanate 125mg Tablets' },
  { brand: 'AMCOL 625 LB', composition: 'Amoxycillin, Potassium Clavulanate & Lactic Acid Bacillus Tablets' },
  { brand: 'CEFLUX', composition: 'Cefuroxime Axetil 250mg' },

  {
    brand: 'GLIMIT K2',
    composition:
      'Omega 3 Fatty Acids (EPA & DHA), Calcitriol, Methylcobalamin, Folic Acid, Boron & Calcium Carbonate Soft Gelatin Capsules',
    // NOTE: packaging text differs from the spreadsheet's composition for this SKU.
    // Used the printed, client-approved packaging wording — needs client confirmation.
  },

  {
    brand: 'TOCONIL 50',
    composition: 'Tocotrienol (50%), Omega 3 Fatty Acid (EPA 180mg & DHA 80mg) Soft Gelatin Capsules',
  },
  {
    brand: 'QLIMIT 10',
    composition: 'Co-Enzyme Q10, Lycopene, Omega 3 Fatty Acid, Betacarotene, Zinc Sulphate & Sodium Selenite Softgel Capsules',
    // NOTE: packaging text differs from the spreadsheet's composition for this SKU.
    // Used the printed, client-approved packaging wording — needs client confirmation.
  },

  { brand: 'METGVO 1', composition: 'Metformin 500mg + Glimepiride 1mg + Voglibose 0.2mg' },
  { brand: 'METGVO 2', composition: 'Metformin 500mg + Glimepiride 2mg + Voglibose 0.2mg' },
  { brand: 'METGVO 1 FORTE', composition: 'Metformin 1000mg + Glimepiride 1mg + Voglibose 0.2mg' },
  { brand: 'METGVO 2 FORTE', composition: 'Metformin 1000mg + Glimepiride 2mg + Voglibose 0.2mg' },
  { brand: 'DTRIO 500', composition: 'Dapagliflozin 10mg + Sitagliptin 100mg + Metformin 500mg' },
  { brand: 'DTRIO 1000 FORTE', composition: 'Dapagliflozin 10mg + Sitagliptin 100mg + Metformin 1000mg' },

  {
    brand: 'RIDCONSTY (Suspension)',
    composition: 'Milk of Magnesia, Liquid Paraffin & Sodium Picosulfate Suspension (Sugar free)',
  },
  { brand: 'RAFTICON', composition: 'Sodium Alginate + Sodium Bicarbonate + Calcium Carbonate Oral Suspension' },
  { brand: 'ITOZOL', composition: 'Rabeprazole 20mg + Itopride 150mg Capsules' },
  { brand: 'DOMOZOL', composition: 'Rabeprazole Sodium Gastro Resistant (EC) & Domperidone (SR) Capsules' },
  { brand: 'RIFOXTON-550', composition: 'Rifaximin Tablets 550mg' },
  { brand: 'GSUCOX (Suspension)', composition: 'Sucralfate & Oxetacaine Suspension' },
  { brand: 'EMOZOL 40', composition: 'Enteric Coated Esomeprazole 40mg' },
  { brand: 'EMOZOL D', composition: 'Esomeprazole & Domperidone Capsules' },
  {
    brand: 'EMOZOL LS',
    composition: 'Enteric Coated Esomeprazole 40mg and Sustained Release Levosulpiride 75mg Capsules',
  },

  { brand: 'MYCOBIL 1500', composition: 'Methylcobalamin Injection 1500mcg — For IM/IV Use Only' },
  { brand: 'NEURGO-PM', composition: 'Pregabalin (75mg) & Methylcobalamin Tablets' },
  { brand: 'NEURGO-PNT', composition: 'Pregabalin (75mg) and Nortriptyline (10mg) Tablets' },
  { brand: 'NEURGO-GNT 100', composition: 'Gabapentin (100mg) and Nortriptyline (10mg) Tablets' },
  {
    brand: 'NEURGO-300',
    composition: 'Gabapentin (300mg) & Nortriptyline Tablets',
    // NOTE: the spreadsheet calls this "NEURGO-GNT 300" — packaging artwork prints
    // "NEURGO-300" (no "GNT"). Used the packaging name since it's the printed, approved version.
  },
  {
    brand: 'NEURGO-GNT 300',
    composition: 'Gabapentin (400mg) and Nortriptyline (10mg)',
    // NOTE: the spreadsheet lists a second, separate "NEURGO-GNT 300" row with a 400mg dose —
    // likely a typo for "NEURGO-GNT 400", but there's no matching packaging artwork yet to
    // confirm the correct brand name. Flagged for client confirmation before shipping.
  },

  { brand: 'TARCUMIN', composition: 'Curcumin 600mg, Piperine 5mg & Boswellic Acid 250mg' },
  {
    brand: 'GALOR-ASP',
    composition: 'Aceclofenac, Paracetamol & Serratiopeptidase Tablets',
    // NOTE: the spreadsheet spells this "GOLOR-ASP" — packaging artwork confirms "GALOR-ASP",
    // used here as the printed, approved name.
  },

  { brand: 'FIXOMON 120', composition: 'Montelukast Sodium and Fexofenadine Hydrochloride Tablets' },
  { brand: 'ACYLBRON', composition: 'Acebrophylline 100mg and Acetylcysteine 600mg Tablets' },
  { brand: 'ACYLBRON SR', composition: 'Acebrophylline Sustained Release Tablets 200mg' },
];

// Not included: "GALOR-D3 Nano Shot" (Cholecalciferol/Vitamin D3 60,000 IU oral solution,
// sugar-free, 4x5ml bottles) appears in the client's packaging artwork (and has a product
// photo already sitting in src/assets/products/) but not in the spreadsheet. Needs client
// confirmation on whether to add it before it's included here.

export const products = rawProducts.map((product) => ({
  ...product,
  image: findProductImage(product.brand),
}));
