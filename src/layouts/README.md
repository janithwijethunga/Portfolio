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

**Usage:**
```jsx
import { PageLayout } from '../layouts'

const AboutPage = () => {
  return (
    <PageLayout 
      title="About Me" 
      subtitle="Learn more about my background"
      className="pt-16"
    >
      {/* Page content */}
    </PageLayout>
  )
}
```

### 3. SectionLayout (`src/layouts/SectionLayout.jsx`)
For individual sections within a page.

**Props:**
- `title` (string, optional): Section title
- `subtitle` (string, optional): Section subtitle/description
- `children` (ReactNode): Section content
- `className` (string, optional): Additional CSS classes
- `id` (string, optional): Section ID for navigation

**Usage:**
```jsx
import { SectionLayout } from '../layouts'

const Homepage = () => {
  return (
    <div>
      <SectionLayout 
        id="about" 
        title="About Me" 
        subtitle="My background and experience"
        className="bg-gray-50"
      >
        {/* Section content */}
      </SectionLayout>
    </div>
  )
}
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
│   ├── SectionLayout.jsx  # Section layout
│   └── index.js          # Layout exports
├── Pages/
│   ├── Homepage.jsx      # Main homepage with sections
│   └── AboutPage.jsx     # Example additional page
└── Components/
    └── Navbar.jsx        # Navigation component
```

## Best Practices

1. **Use MainLayout** for the entire app wrapper
2. **Use PageLayout** for standalone pages
3. **Use SectionLayout** for homepage sections
4. **Add consistent spacing** with Tailwind classes
5. **Include proper IDs** for navigation targets
6. **Use semantic HTML** elements
7. **Ensure accessibility** with proper heading hierarchy

## Example Implementation

```jsx
// App.jsx
import { MainLayout } from './layouts'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </MainLayout>
  )
}

// Homepage.jsx
import { SectionLayout } from '../layouts'

const Homepage = () => {
  return (
    <div className="pt-16">
      <SectionLayout id="hero" className="min-h-screen">
        <Hero />
      </SectionLayout>
      
      <SectionLayout id="about" title="About Me">
        <AboutSection />
      </SectionLayout>
    </div>
  )
}
```

This layout system provides a solid foundation for building consistent, maintainable, and scalable portfolio pages.