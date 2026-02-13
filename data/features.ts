import { ArrowUpRight, CompassIcon, Gauge, Layers, Layout, ShieldCheck } from "lucide-react";

const features = [
  {
    id: '1',
    icon: <CompassIcon className="h-6 w-6" strokeWidth={1.5} />,
    label: 'Strategy',
    title: 'Clarity Before Execution',
    description:
      'Every engagement begins with structured thinking — positioning, system mapping, and measurable objectives before a single line of code is written.',
  },
  {
    id: '2',
    icon: <GaugeIcon className="h-6 w-6" strokeWidth={1.5} />,
    label: 'Performance',
    title: 'Engineered for Speed',
    description:
      'Performance is built into the foundation, not optimized later. Clean architecture and disciplined engineering ensure consistently fast experiences.',
    metrics: {
      value: '< 1.5s',
      label: 'Load Time Target',
    },
  },
  {
    id: '3',
    icon: <LayoutIcon className="h-6 w-6" strokeWidth={1.5} />,
    label: 'Experience',
    title: 'Conversion-Driven Design',
    description:
      'Interfaces are structured to guide behavior — reducing friction, increasing clarity, and translating attention into measurable action.',
    metrics: {
      value: '+30%',
      label: 'Avg. Engagement Lift',
    },
  },
  {
    id: '4',
    icon: <LayersIcon className="h-6 w-6" strokeWidth={1.5} />,
    label: 'Architecture',
    title: 'Built to Scale',
    description:
      'Modular systems and maintainable codebases designed for long-term evolution — preventing costly rebuilds as your business grows.',
  },
  {
    id: '5',
    icon: <ShieldCheckIcon className="h-6 w-6" strokeWidth={1.5} />,
    label: 'Execution',
    title: 'Senior-Led Delivery',
    description:
      'Experienced engineers and designers oversee every project phase. No outsourcing. No diluted ownership. Precision from start to launch.',
  },
  {
    id: '6',
    icon: <ArrowUpRightIcon className="h-6 w-6" strokeWidth={1.5} />,
    label: 'Partnership',
    title: 'Beyond Launch',
    description:
      'Continuous refinement, optimization, and strategic guidance ensure your digital presence remains competitive long after release.',
  },
];
