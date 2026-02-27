import { motion, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

const CountUp = ({ value, duration = 2 }: { value: number, duration?: number }) => {
  const count = useSpring(0, { bounce: 0, duration: duration * 1000 });
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    count.set(value);
  }, [value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export default CountUp;
