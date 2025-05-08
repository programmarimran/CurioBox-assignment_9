import React, { use } from 'react';
const termsAndConditionsPromise=fetch("/termsAndPrivacy.json").then(res=>res.json())
const TermsAndCondition = () => {
    const {legalInfo}=use(termsAndConditionsPromise)
    // console.log(legalInfo.termsAndConditions)
    const terms=legalInfo.termsAndConditions

  const { title, lastUpdated, sections } = terms

  return (
    
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-sm text-gray-500 mb-4">Last updated: {lastUpdated}</p>

      {sections.map(section => (
        <div key={section.id} className="mb-6">
          <h2 className="text-xl font-semibold mb-1">{section.title}</h2>
          <p>{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default TermsAndCondition;
