import React, {useState} from "react";

export default function ServiceExperiencePanel({showPreview=false}){
 const [open,setOpen]=useState(false);
 const [projects,setProjects]=useState(()=>load());
 const [tab,setTab]=useState("projects");

 function load(){
  try{return JSON.parse(localStorage.getItem("dpg_projects")||"[]")}catch{return []}
 }
 const refresh=()=>setProjects(load());

 if(!open) return (
  <button onClick={()=>setOpen(true)} style={{position:"fixed",right:24,bottom:24,zIndex:99,padding:"12px 18px",borderRadius:999,border:"none",background:"#8A6A56",color:"#fff",fontWeight:700,cursor:"pointer"}}>
   BRAND ENGINE Tools
  </button>
 );

 return (
 <div style={{
  position:"fixed",right:24,bottom:24,width:380,height:"80vh",maxHeight:"80vh",zIndex:99,
  background:"#fff",border:"1px solid #ddd",borderRadius:18,
  padding:0,boxShadow:"0 10px 30px rgba(0,0,0,.15)",display:"flex",flexDirection:"column",overflow:"hidden"
 }}>
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:20,flexShrink:0}}>
   <b style={{fontSize:18}}>Service Experience</b>
   <button onClick={()=>setOpen(false)}>×</button>
  </div>

  <div style={{display:"flex",gap:8,margin:"0 20px 16px",flexShrink:0}}>
   {[
    ["projects","프로젝트"],
    ["strategy","Strategy"],
    ...(showPreview ? [["preview","Preview"]] : []),
    ["review","Review"]
   ].map(t=>
    <button key={t[0]} onClick={()=>setTab(t[0])}
     style={{
      flex:1,padding:8,borderRadius:8,
      border:"1px solid #ddd",
      background:tab===t[0]?"#8A6A56":"#fff",
      color:tab===t[0]?"white":"#333"
     }}>
     {t[1]}
    </button>
   )}
  </div>

  <div style={{overflowY:"auto",padding:"0 20px 20px",flex:1,minHeight:0}}>
  {tab==="projects" && <>
   <button onClick={refresh} style={{width:"100%",padding:10,borderRadius:8}}>
    저장 프로젝트 새로고침
   </button>

   <div style={{margin:"12px 0",fontSize:13}}>
    저장 프로젝트 {projects.length}개
   </div>

   <div style={{maxHeight:180,overflow:"auto"}}>
   {projects.length===0 ?
    <div style={{padding:20,textAlign:"center",color:"#777"}}>
     저장된 프로젝트가 없습니다.
    </div>
    :
    projects.map(p=>
     <div key={p.projectId}
      style={{padding:12,border:"1px solid #eee",borderRadius:10,marginBottom:8}}>
      <b>{p.projectName}</b>
      <div style={{fontSize:12,color:"#777",marginTop:5}}>
       저장일 : {new Date(p.updatedAt).toLocaleDateString()}
      </div>
     </div>
    )}
   </div>
  </>}

  {tab==="strategy" &&
   <div style={{lineHeight:1.7,fontSize:14}}>
    <b>AI Commerce Strategy Report</b>
    <div style={{marginTop:12,padding:12,border:"1px solid #eee",borderRadius:10}}>
      <b>01 제품 분석</b>
      <p>카테고리와 제품 특성을 기반으로 구매자가 확인해야 하는 기준을 분석합니다.</p>
    </div>
    <div style={{marginTop:10,padding:12,border:"1px solid #eee",borderRadius:10}}>
      <b>02 구매 기준</b>
      <p>원료·구성·품질·사용 정보를 중심으로 선택 기준을 정리합니다.</p>
    </div>
    <div style={{marginTop:10,padding:12,border:"1px solid #eee",borderRadius:10}}>
      <b>03 Story Flow</b>
      <p>왜 필요한가 → 어떤 기준으로 선택하는가 → 신뢰 형성 흐름으로 설계합니다.</p>
    </div>
    <div style={{marginTop:10,padding:12,border:"1px solid #eee",borderRadius:10}}>
      <b>04 디자인 전략</b>
      <p>제품 성격에 맞는 정보 전달 방식과 이미지 방향을 연결합니다.</p>
    </div>
   </div>
  }


  {tab==="preview" &&
   <div style={{lineHeight:1.7,fontSize:14}}>
    <b>AI Preview Editor</b>
    <p>최종 상세페이지 생성 이후 섹션을 검토하고 수정하는 공간입니다.</p>
    {["Hero","제품 핵심 가치","원료/구성","품질 정보","섭취 안내","CTA"].map((s,i)=>
      <div key={s} style={{marginTop:10,padding:12,border:"1px solid #eee",borderRadius:10}}>
        <b>{String(i+1).padStart(2,"0")} {s}</b>
        <div style={{marginTop:8}}>
          <button onClick={()=>alert(`${s} 섹션 수정 모달 연결 예정`)} style={{marginRight:8}}>수정</button>
          <button onClick={()=>alert(`${s} AI 재생성 요청`)}>AI 재생성</button>
        </div>
      </div>
    )}
   </div>
  }

  {tab==="review" &&
   <div style={{lineHeight:1.8,fontSize:14}}>
    <b>Human Review</b>
    <p>
    AI 생성 결과를 사람이 검토하는 단계입니다.
    </p>
    <ul>
     <li>표현 적합성</li>
     <li>카테고리 일치</li>
     <li>과장 표현 확인</li>
     <li>구매 정보 누락 체크</li>
    </ul>
   </div>
  }
  </div>
 </div>
 )
}
