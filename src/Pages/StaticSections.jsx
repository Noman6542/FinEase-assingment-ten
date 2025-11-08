import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { FiAlertTriangle } from "react-icons/fi";

const StaticSections = () => {
  return (
    <div>
      <section>
        <h2 className={`text-2xl font-bold mb-6`}>Financial Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card w-96 bg-base-100 card-sm shadow-sm">
            <div className="card-body">
              <div className="card-title flex items-center gap-2">
                <FiAlertTriangle />
                <h2> Why Financial Planning Matters</h2>
               </div>
              
                

                <p>
                  Financial planning provides a roadmap to your goals, whether
                  it's buying a house or retiring early. It minimizes stress,
                  prepares you for emergencies (like job loss or health issues),
                  and maximizes your wealth over time through disciplined
                  investment.
                </p>
              
            </div>
          </div>
          <div className="card w-96 bg-base-100 card-sm shadow-sm">
            <div className="card-body">
              <div className="card-title flex items-center gap-2">
                <FaBookOpen className="" />
                <h2>Budgeting Tips</h2>
                </div>
              
                
                <p>
                  Start by tracking every expense for a month. Categorize
                  spending to identify areas for reduction. Follow the 50/30/20
                  rule: 50% for Needs, 30% for Wants, and 20% for Savings/Debt.
                  Automate your savings so you pay yourself first.
                </p>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StaticSections;
