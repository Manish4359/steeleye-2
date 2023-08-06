
  function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
    // your logic goes here

    const html=plainTextPositions.reduce((newHtml, pos) => {

      const { start, end } = pos
      const content = plainText.substring(start, end + 1)
      return newHtml.replace(content,`<mark>${content}</mark>`)
    
    },htmlContent)
    return html

  }


  module.exports=highlightHTMLContent