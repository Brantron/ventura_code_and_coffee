export const loader = () => {
  // handle "GET" request
  // set up our text content that will be returned in the response
  const robotText = `
      User-agent: *
      Allow: /

      Sitemap: http://www.venturacodeand.coffee/sitemap.xml

      ### If you're not a bot, you should attend our meetup https://www.meetup.com/ventura-code-coffee/ ###
      `
  // return the text content, a status 200 success response, and set the content type to text/plain
  return new Response(robotText, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
