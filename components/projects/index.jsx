'use client';
import { useState } from 'react';
import styles from './style.module.scss';
import Titles from './titles';
import Descriptions from './descriptions';

const data = [
  {
    title: "AI Hackathon",
    description: "A 3-day event bringing together 200 top AI experts to create groundbreaking solutions with provided GPUs, APIs, and resources.",
    speed: 0.5
  },
  {
    title: "Impapct",
    description: "Developing AI solutions to address critical global challenges in areas like climate change, healthcare, and education.",
    speed: 0.5
  },
  {
    title: "Next-Gen",
    description: "Exploring novel algorithms and architectures to enhance AI capabilities beyond current limitations.",
    speed: 0.67
  },
  {
    title: "Ethical",
    description: "Focusing on projects that promote fairness, transparency, accountability, and safety in AI systems.",
    speed: 0.8
  },
  {
    title: "Creative",
    description: "Pushing the boundaries of AI in creative fields like art, music, design, and content generation.",
    speed: 0.8
  },
  {
    title: "Innovation",
    description: "Applying AI to revolutionize sectors such as FinTech, Healthcare, and Manufacturing.",
    speed: 0.8
  }
]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)
    return (
        <div className={styles.container}>
            <Titles data={data} setSelectedProject={setSelectedProject}/>
            <Descriptions data={data} selectedProject={selectedProject}/>
        </div>
    )
}

