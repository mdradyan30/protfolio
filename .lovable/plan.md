### Objective
Update all three project cards in the Projects section to display the same set of six technology tags below the description paragraph.

### Changes
- File: `src/components/sections/Projects.tsx`
- Update the `tech` array in each of the three project objects to:
  `tech: ["HTML", "CSS", "React.js", "Next.js", "Tailwind CSS", "Better Auth"]`
- The existing tag-rendering markup already sits below the `<p>` description, so no structural layout changes are needed.

### Acceptance Criteria
- Every project card shows all six specified tags in the same order.
- Tags render with the existing badge styling and wrap responsively.