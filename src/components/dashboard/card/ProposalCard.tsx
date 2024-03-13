import React, { useState } from 'react';
import SelectInput from '../option/SelectInput';

function ProposalCard({ status, jobId, onSubmit }: any) {
    const [getWorkType, setWorkType] = useState<{
        option: string;
        value: string | null;
    }>({
        option: 'Lựa chọn',
        value: 'select',
    });

    // Handlers
    const worlkTypeHandler = (option: string, value: string | null) => {
        setWorkType({
            option,
            value,
        });
    };

    const handleSubmit = () => {
        onSubmit({
            job_id: jobId,
            status: getWorkType.value
        });
        console.log("🚀 ~ handleSubmit ~ getWorkType.value:", getWorkType.value)
        console.log("🚀 ~ handleSubmit ~ jobId:", jobId)
    };

    return (
        <div className="d-flex">
            <div className="mb20">
                <SelectInput
                    label=''
                    defaultSelect={getWorkType}
                    handler={worlkTypeHandler}
                    data={[
                        {
                            option: 'WAITING',
                            value: '0',
                        },
                        {
                            option: 'RESPONDED',
                            value: '1',
                        },
                        {
                            option: 'DISCUSS',
                            value: '2',
                        },
                        {
                            option: 'WORKING',
                            value: '3',
                        },
                        {
                            option: 'TESTING',
                            value: '4',
                        },
                        {
                            option: 'READY',
                            value: '5',
                        },
                        {
                            option: 'FINISH',
                            value: '6',
                        }
                    ]}
                />
            </div>
            < button className="btn"
                style={{ padding: "5px ", margin: "10px" }}
                type="submit"
                onClick={handleSubmit}
                value="0"
            >
                Ứng tuyển ngay
                <i className="fal fa-arrow-right-long" />
            </button>
        </div >
    );
}

export default ProposalCard;