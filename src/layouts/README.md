# Layout System Documentation

This portfolio project uses a comprehensive layout system to ensure consistency and maintainability across all pages and components.

## Layout Components

### 1. MainLayout (`src/layouts/MainLayout.jsx`)
The main wrapper layout that includes:
- Fixed navigation bar
- Main content area
- Footer
- Global styling (min-height, background)

**Usage:**
```jsx
import { MainLayout } from '../layouts'

function App() {
  return (
    <MainLayout>
      {/* Your page content */}
    </MainLayout>
  )
}
```

### 2. PageLayout (`src/layouts/PageLayout.jsx`)
For full page layouts with optional title and subtitle.

**Props:**
- `title` (string, optional): Main page title
- `subtitle` (string, optional): Page subtitle/description
- `children` (ReactNode): Page content
- `className` (string, optional): Additional CSS classes
- `eyebrow` (string, optional): Small label above the title

**Usage:**
```jsx
import { PageLayout } from '../layouts'


```

## Navigation System

The navbar includes:
- Fixed positioning with backdrop blur
- Responsive mobile menu
- Smooth scrolling to sections
- Active state management

### Smooth Scrolling
The navbar automatically handles smooth scrolling to sections when anchor links (#about, #skills, etc.) are used.

## Responsive Design

All layouts are fully responsive with:
- Mobile-first approach
- Breakpoint classes (md:, lg:, xl:)
- Flexible grid systems
- Responsive typography

## Styling

The project uses Tailwind CSS for styling with:
- Consistent spacing system
- Color palette
- Typography scale
- Shadow and border utilities

## File Structure

```
src/
├── layouts/
│   ├── MainLayout.jsx     # Main app wrapper
│   ├── PageLayout.jsx     # Full page layout
│   └── index.js          # Layout exports
├── Pages/
│   └── Homepage.jsx      # Main homepage with sections
│ 
└── Components/
  └── common/           # Navbar, footer, theme toggle
```

## Best Practices

1. **Use MainLayout** for the entire app wrapper
2. **Use PageLayout** for standalone pages
3. **Add consistent spacing** with Tailwind classes
4. **Include proper IDs** for navigation targets
5. **Use semantic HTML** elements
6. **Ensure accessibility** with proper heading hierarchy

## Example Implementation

```jsx
// App.jsx
import { MainLayout } from './layouts'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </MainLayout>
  )
}

// Homepage.jsx
const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  )
}
```

This layout system provides a solid foundation for building consistent, maintainable, and scalable portfolio pages.