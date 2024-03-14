import React, { FormEvent, useState } from 'react';
import SelectInput from '../option/SelectInput';
import { Input } from 'react-select/animated';


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
        <div className="d-flex">
            <form onSubmit={handleSubmit}>
                <div className="mb20">
                    <input
                        type="text"
                        name="price"
                        className="form-control"
                        placeholder="Deal lương với nhà tuyển dụng"
                        value={price}
                        onChange={onPriceChange}
                        required
                    />

                </div>
                < button className="btn"
                    style={{ margin: '10px 0 20px -10px ' }}
                >
                    Ứng tuyển ngay
                    <i className="fal fa-arrow-right-long" />
                </button>
            </form>
        </div >
    );
}

export default ProposalCard;