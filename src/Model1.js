import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Model1(props)
{



 return(
   <>
   <div class="row" style={{marginTop:3}}>
          <div className="col-6">
       <li class="bhajan-list">{props.title1}</li>
      </div>
      <div className="col-6">
       {/* Button trigger modal */}

       {/* Button trigger modal */}
<button type="button" className="btn btn-primary smallsizebutton" data-bs-toggle="modal" data-bs-target={props.target1}>
    Click here to listen    
</button>
  
   {/* Modal  */}
  <div className="modal fade" id={props.id1} tabindex="-1" aria-labelledby={props.name1} aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        
     
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        
        <div className="modal-body">
            <iframe width="100%" height="300px" src={props.link1} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
               
        </div>
       
      </div>
    </div>
  </div>
</div>

</div>

  </>
  );
}

export default Model1;