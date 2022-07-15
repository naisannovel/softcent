import React, { useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import style from './Workflow.module.css';

const Workflow = (props) => {

    const [selectedId, setSelectedId] = useState(1);

    return (
        <div className={[style.workflow__container, props.class].join(' ')}>
            <SectionTitle align='center'>Workflow</SectionTitle>
            <div className={style.workflow__sub_container}>
                <div className={style.workflow__text_container}>

                    {
                        selectedId === 1 ? 
                        <div className={style.workflow__detail_container}>
                            <h6>1. Defining Goal</h6>
                            <span>Project analysis, defining project requirements and objectives based on clients needs, cost and effort estimation, creating value and process planning.</span>
                        </div> :
                        <p onClick={()=> setSelectedId(1)}>1. Defining Goal</p>
                    }
                    {
                        selectedId === 2 ? 
                        <div className={style.workflow__detail_container}>
                            <h6>2. Product Design</h6>
                            <span>Project analysis, defining project requirements and objectives based on clients needs, cost and effort estimation, creating value and process planning.</span>
                        </div> :
                        <p onClick={()=> setSelectedId(2)}>2. Product Design</p>
                    }
                    {
                        selectedId === 3 ? 
                        <div className={style.workflow__detail_container}>
                            <h6>3. Development</h6>
                            <span>Project analysis, defining project requirements and objectives based on clients needs, cost and effort estimation, creating value and process planning.</span>
                        </div> :
                        <p onClick={()=> setSelectedId(3)}>3. Development</p>
                    }
                    {
                        selectedId === 4 ? 
                        <div className={style.workflow__detail_container}>
                            <h6>4. Testing</h6>
                            <span>Project analysis, defining project requirements and objectives based on clients needs, cost and effort estimation, creating value and process planning.</span>
                        </div> :
                        <p onClick={()=> setSelectedId(4)}>4. Testing</p>
                    }
                    {
                        selectedId === 5 ? 
                        <div className={style.workflow__detail_container}>
                            <h6>5. Product Release</h6>
                            <span>Project analysis, defining project requirements and objectives based on clients needs, cost and effort estimation, creating value and process planning.</span>
                        </div> :
                        <p onClick={()=> setSelectedId(5)}>5. Product Release</p>
                    }
                    {
                        selectedId === 6 ? 
                        <div className={style.workflow__detail_container}>
                            <h6>6. Maintenance Support</h6>
                            <span>Project analysis, defining project requirements and objectives based on clients needs, cost and effort estimation, creating value and process planning.</span>
                        </div> :
                        <p onClick={()=> setSelectedId(6)}>6. Maintenance Support</p>
                    }
                    
                </div>
                <div className={style.workflow__img_container}>
                    <img src={require("../../Assets/Images/workflow.png")} alt="workflow image"/>
                </div>
            </div>
        </div>
    );
};

export default Workflow;