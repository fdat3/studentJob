import React, { FormEvent, useState } from 'react';
import SelectInput from '../option/SelectInput';
import { Input } from 'react-select/animated';
import Link from 'next/link';


function ProposalCard({ jobId, onSubmit }: any) {
    const [price, setPrice] = useState('');
    // Handlers
    const onPriceChange = (event: FormEvent<HTMLInputElement>) => {
        setPrice(event.currentTarget.value);
    };



    const handleSubmit = () => {
        onSubmit({
            job_id: jobId,
            status: 0,
            price: parseInt(price)
        });

    };

    return (
        <div className="price-widget pt25 bdrs8">
            <h3 className="widget-title">
                Deal your salary with HR !
            </h3>
            <div className="category-list mt20">
                <form onSubmit={handleSubmit}>
                    <div className="mb20">
                        <input
                            type="text"
                            name="price"
                            className="form-control"
                            placeholder="Input your salary"
                            value={price}
                            onChange={onPriceChange}
                            required
                        />

                    </div>
                    <div className="d-grid">
                        < button className="ud-btn btn-thm"
                            style={{ margin: '10px 0 20px -10px ' }}
                        >
                            DEAL
                            <i className="fal fa-arrow-right-long" />
                        </button>
                    </div>
                </form>
            </div>

        </div >
    );
}

export default ProposalCard;