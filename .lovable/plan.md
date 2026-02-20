
# Remove All Specific Weight Loss Product Names Site-Wide

## What Needs to Change

Every mention of **Semaglutide**, **Tirzepatide**, **GLP-1**, **GIP**, **CJC-1295**, and **Ipamorelin** must be removed from all visible page copy AND from the metadata (titles, descriptions, keywords) that search engines read. There are exactly 3 files that contain these names.

---

## File-by-File Changes

### 1. `src/pages/WeightLoss.tsx` — Most mentions

**Approaches card array (top of file):**
- Remove the "Semaglutide (GLP-1)" card entirely
- Remove the "Tirzepatide" card entirely
- Replace the "Peptide Protocols" card description — remove "CJC-1295/Ipamorelin", replace with generalized language: *"Targeted peptide therapy to support fat metabolism and preserve lean muscle mass, selected based on individual clinical evaluation."*

**Hero subheadline:**
- Remove: *"including Semaglutide, Tirzepatide, and personalized metabolic optimization"*
- Replace with: *"through physician-supervised, data-driven protocols tailored to your physiology and goals."*

**"Why Medical Weight Loss?" body paragraph:**
- Remove: *"through advanced pharmaceuticals like Semaglutide and Tirzepatide, combined with comprehensive metabolic testing and personalized treatment plans."*
- Replace with: *"through evidence-based medical interventions, comprehensive metabolic testing, and personalized treatment plans built around your physiology."*

---

### 2. `src/pages/Services.tsx` — Weight Loss card

**Description text:**
- Remove: *"featuring Semaglutide, Tirzepatide, and personalized metabolic protocols"*
- Replace with: *"Physician-supervised weight management using evidence-based medical protocols, personalized metabolic testing, and ongoing physician monitoring for sustainable, lasting results."*

**Benefits bullet list:**
- Remove: `"Semaglutide & Tirzepatide protocols"`
- Replace with: `"Physician-prescribed medical protocols"`

---

### 3. `src/lib/seo-data.ts` — Metadata (critical for search engines)

**`peptideTherapy` entry:**
- Description: Remove *"BPC-157, Semaglutide, CJC-1295, and more."* → Replace with *"Physician-supervised peptide protocols in Oceanside tailored to cellular regeneration, recovery, and performance."*
- Keywords: Remove `BPC-157 San Diego, Semaglutide` → Replace with `regenerative medicine Oceanside, peptide therapy San Diego`

**`weightLoss` entry:**
- Description: Remove *"with Semaglutide, peptide therapy"* → Replace with *"Medical weight loss programs in Oceanside using evidence-based, physician-supervised protocols. Achieve sustainable results with personalized metabolic care."*
- Keywords: Remove `Semaglutide San Diego, GLP-1 therapy` → Replace with `medical weight management Oceanside, metabolic optimization San Diego`

---

## Summary of Files Changed

| File | Changes |
|---|---|
| `src/pages/WeightLoss.tsx` | Remove 2 product-named cards, scrub 3 body text mentions |
| `src/pages/Services.tsx` | Scrub description and 1 benefit bullet |
| `src/lib/seo-data.ts` | Clean metadata descriptions and keywords for weightLoss and peptideTherapy entries |

No other files contain these product names — the `CoreServices.tsx` homepage component is already clean.
