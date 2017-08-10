
let tl = `<h5><%=title%>一共有:<%=total%>条结果</h5>
	<ul>
	<%for(var i=0;i<subjects.length;i++){%>
		<li>
	      <img width="128" src="<%=subjects[i].images.medium%>">
	      <p><%=subjects[i].title%></p>
	      <p>评分:<%=subjects[i].rating.average%>分</p>
	    </li>
	<%}%>	
  </ul>
  <div id="xh">
  	<%for(var i=0;i<2;i++){%>
  		<a href="javascript:;"></a>
  	<%}%>
  </div>`;
  $('#txtx').html(tl);