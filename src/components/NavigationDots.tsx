import { useNavigate, useLocation } from "react-router-dom";

interface NavigationDotsProps {
  creative?: string;
}

const NavigationDots = ({ creative }: NavigationDotsProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const sections = [
    { path: '/', index: 0 },
    { path: '/section-2', index: 1 },
    { path: '/section-3', index: 2 },
    { path: '/section-4', index: 3 },
    { path: '/section-5', index: 4 },
    { path: '/section-6', index: 5 },
  ];

  const getCurrentIndex = () => {
    const currentPath = location.pathname.replace(`/${creative}`, '').replace(`/${creative}/`, '/');
    const section = sections.find(s => s.path === currentPath);
    return section?.index ?? 0;
  };

  const handleDotClick = (path: string) => {
    const fullPath = creative ? `/${creative}${path === '/' ? '' : path}` : path;
    navigate(fullPath);
  };

  const current = getCurrentIndex();

  return (
    <div className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 z-50 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full">
      {sections.map((section) => (
        <button
          key={section.index}
          onClick={() => handleDotClick(section.path)}
          className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
            section.index === current ? "w-6 md:w-8 bg-primary" : "w-1.5 md:w-2 bg-primary/30 hover:bg-primary/50"
          }`}
          aria-label={`Ir para seção ${section.index + 1}`}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
