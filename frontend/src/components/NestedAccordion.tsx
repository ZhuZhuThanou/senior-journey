import React, { useState } from 'react';
import TaskCard, { Task } from './TaskCard';

interface AccordionProps {
    sectionTitle: string;
    children: React.ReactNode
}

const Accordion: React.FC<AccordionProps> = ({ sectionTitle = "", children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-4 container mx-auto">
            <div
                className="bg-[#00363C] text-white px-4 pt-12 py-2 cursor-pointer flex flex-col justify-between"
                onClick={() => setIsOpen(!isOpen)}
            > 
                <div className="flex items-center">
                    <span>{sectionTitle}</span>
                    <div className="ml-auto">
                        <strong>
                        {isOpen ? '-' : '+'}
                        </strong>
                    </div>
                </div>
                <div>
                    <span className="text-xs text-gray-400">Tasks to think about before you plan on retiring</span>
                </div>
            </div>
            {isOpen && (
                <div className="border">
                    {children}
                </div>
            )}
        </div>
    );
};

const AccordionInside: React.FC<Task> = (task) => {
    const [isOpenInner, setIsOpenInner] = useState(false);
    return (
        <div className="w-full">
            <div
                className="bg-white text-black px-4 pt-6 py-2 border cursor-pointer flex justify-between items-center"
                onClick={() => setIsOpenInner(!isOpenInner)}
            >
                <span>{task.title}</span>
                <strong>
                    {isOpenInner ? '-' : '+'}
                </strong>
            </div>
            {isOpenInner && (
                    <TaskCard showCheckbox={false}
                        task={task} />
            )}
        </div>
    );
};



interface NestedAccordionProps {
    sectionTitle: string;
    tasks: Task[];
}

const NestedAccordion: React.FC<NestedAccordionProps> = ({ sectionTitle, tasks = [] }) => {
    return (
        <Accordion sectionTitle={sectionTitle}>
            {tasks.map((task, index) => (
                <div key={index}>
                    <AccordionInside key={index} {...task} />
                </div>
            ))}

        </Accordion>
    );
};

export default NestedAccordion;
