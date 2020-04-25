import React, { useState } from 'react';

export const AccordionContent = ({ OpenIt, isOpen, header, children }) => {
    return (
        <>
            <div className="[ accordion-header ]" onClick={OpenIt}>
                <h4>
                    {header}<span className={isOpen ? '[ glyphicon glyphicon-chevron-left ] [ accordion-header_arrow ]' : '[ glyphicon glyphicon-chevron-right ] [ accordion-header_arrow ]'}></span>
                </h4>
            </div>
            <div className={isOpen ? 'accordion-content' : 'accordion-content__hide'}>
                {children}
            </div>
        </>
    )
}
export default ({ children }) => {
    const [whatIsOpen, setWhatIsOpen] = useState(undefined);
    const OpenIt = (index) => {
        (whatIsOpen === index) ? setWhatIsOpen(undefined) : setWhatIsOpen(index);
    }
    return (
        <div className="[ accordion ]">
            {children.map((value, index) =>
                <AccordionContent key={index}
                    isOpen={whatIsOpen === index}
                    children={value.body}
                    header={value.header}
                    OpenIt={() => { OpenIt(index) }}
                />
            )}
        </div>
    );
}