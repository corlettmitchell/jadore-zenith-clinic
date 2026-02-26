

# Replace "Weight Loss" → "Weight Care" Site-Wide

## Files to Change (6 files)

### 1. `src/components/home/CoreServices.tsx`
- Line 31: `"Weight Loss"` → `"Weight Care"`

### 2. `src/pages/Services.tsx`
- Line 37: title `"Weight Loss"` → `"Weight Care"`
- Lines 115–116: hero paragraph "medical weight loss" → "medical weight care"

### 3. `src/pages/WeightLoss.tsx` (heaviest — ~8 replacements)
- Line 14: "preventing weight loss" → "preventing weight management"
- Line 24: "medical weight loss protocol" → "medical weight care protocol"
- Line 62: "sustainable weight loss" → "sustainable weight care"
- Line 69 comment: "Why Medical Weight Loss" → "Why Medical Weight Care"
- Line 80: heading "Why Medical Weight Loss?" → "Why Medical Weight Care?"
- Line 84: "Weight loss is more than" → "Weight management is more than"
- Line 89: "medical weight loss programs" → "medical weight care programs"
- Line 120: alt text "Weight Loss Optimization" → "Weight Care consultation"
- Line 149: "weight loss program" → "weight care program"
- Line 188: "weight loss protocol" → "weight care protocol"

### 4. `src/lib/seo-data.ts`
- Line 12: homepage description "weight loss" → "weight care"
- Line 34: title "Weight Loss Optimization" → "Weight Care - J'adore Wellness Oceanside CA"
- Line 36: description "Medical weight loss programs" → "Medical weight care programs"
- Line 39: keywords — all "weight loss" → "weight care"
- Line 84: services description "weight loss" → "weight care"

### 5. `src/components/layout/Navigation.tsx`
- Line 13: `"Weight Care"` label already correct — **no change needed**

### 6. `index.html`
- Check for any "weight loss" in meta tags

**Not changing:** URL paths (`/services/weight-loss`), file names (`WeightLoss.tsx`), variable names (`weightlossImage`, `weightLoss`), or the `value="weight-loss"` form option values — these are internal/technical and not user-facing. The Footer and Contact/Intake pages already say "Weight Care" in their labels.

