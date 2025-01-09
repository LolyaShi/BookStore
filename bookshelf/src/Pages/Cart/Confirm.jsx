import './Confirm.scss'

export default function Confirm({confirm, onClose, onConfirm}){
    if(confirm){
        return(
            <div className="Confirm">
            
                    <div className="confirmation">
                        <div className="close" onClick={onClose}>X</div>
                        <div className="confirm_content">
                            <h2>Do you want buy this books?</h2>
                            <div className="btns">
                                <div className="btn confirm_btn" onClick={onConfirm}>Yes</div>
                                <div className="btn reject_btn" onClick={onClose}>No</div>
                            </div>
                        </div>
                    </div>
                
            </div>
        )
    }
    else{
       return
    }
}