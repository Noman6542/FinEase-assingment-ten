import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { PacmanLoader } from 'react-spinners';

const FinancialOverview = () => {
  const { loading } = use(AuthContext);
  return (
    <div>
      {/* Overview section  */}

      <section>
        <h2 className={`text-2xl font-bold mb-6`}>Financial Overview</h2>

        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <PacmanLoader color="#5e5feb" size={20} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="card w-96 bg-base-100 card-sm shadow-sm">
              <div className="card-body">
                <h2 className="card-title">Small Card</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                
              </div>
            </div>
            <div className="card w-96 bg-base-100 card-sm shadow-sm">
              <div className="card-body">
                <h2 className="card-title">Small Card</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                
              </div>
            </div>
            <div className="card w-96 bg-base-100 card-sm shadow-sm">
              <div className="card-body">
                <h2 className="card-title">Small Card</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default FinancialOverview;