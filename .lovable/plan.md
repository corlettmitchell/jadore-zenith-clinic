## Plan: Add "About" Dropdown with Meet Our Team Link

Convert the existing "About" nav item into a hover dropdown (matching the Vitality / Recovery dropdown pattern already in the navbar) so users can jump straight to the Team page from the header instead of scrolling to the bottom of the About page.

### Changes

**Edit `src/components/layout/Navigation.tsx`**

1. Add a new `aboutSubLinks` array near the existing `hormoneSubLinks` / `recoverySubLinks`:
   - "About J'adore" → `/about`
   - "Meet Our Team" → `/team`

2. Update the `navLinks` entry for About to include `hasDropdown: true` and `dropdownKey: "about"`.

3. Extend `getSubLinks` to return `aboutSubLinks` when the key is `"about"`.

That's it — the existing desktop hover dropdown and mobile collapsible dropdown rendering logic will pick up the new entry automatically, including the gold active-state styling, ChevronDown indicator, and Framer Motion fade.

### Notes

- No change required to the About page itself; the Team section can stay at the bottom as supplemental content.
- Mobile users get the same behavior via the existing accordion-style mobile dropdown.