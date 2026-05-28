
import style from '../../styles/Features.module.css';
function FeactDoc(params) {

    return (
        <>



            <div className={style.CardDoc} >
                <h3>Documentacio</h3>

                <div className={style.CardDoc_content}>

                    <div>
                        <i className="fa-regular fa-file-lines"></i>
                        <label htmlFor="">Tecnical Inspection</label>
                        <i className="fa-solid fa-download"></i>
                    </div>

                    <div>
                        <i className="fa-solid fa-shield-halved"></i>
                        <label htmlFor="">Clean Carfax Report</label>
                        <i className="fa-solid fa-eye"></i>

                    </div>

                    <div>
                        <i className="fa-solid fa-receipt"></i>
                        <label htmlFor="">Clean Carfax Report</label>
                        <i className="fa-solid fa-eye"></i>

                    </div>

 

                </div>
            </div>
        </>
    );
}


export default FeactDoc;