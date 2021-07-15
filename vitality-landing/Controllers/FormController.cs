using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SendGrid;
using SendGrid.Helpers.Mail;


public class HomeController : Controller  
{  
    
    public static string _name;
    public static string _email;
    public static string _phone;



    [HttpGet]  
    public IActionResult FormsTest()  
    {  
        return View();  
    }  

    [HttpPost]  
    public IActionResult FormsTestPost()  


    {
    _name = HttpContext.Request.Form["UserName"];
    _email    = HttpContext.Request.Form["email"];
    _phone    = HttpContext.Request.Form["phone"];
        SendEmail().Wait();
    return Content("Hello, " + HttpContext.Request.Form["UserName"] + ". You are " + HttpContext.Request.Form["email"] + " is your email" +  HttpContext.Request.Form["phone"]);  
    }

    //private static void SendEmail()
    //{
    //    Execute().Wait();
    //}

    static async Task<Response> SendEmail()
    {
        var apiKey = "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";
        var client = new SendGridClient(apiKey);
        var from = new EmailAddress("wramirez@priscorp.net", "Will Ramirez");
        var subject = "Sending with SendGrid is Fun";
        var to = new EmailAddress(_email, _name);
        var plainTextContent = "and easy to do anywhere, even with C#";
        var htmlContent = "<strong>and easy to do anywhere, even with C#</strong>";
        var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
        var response = await client.SendEmailAsync(msg).ConfigureAwait(false);

        return response;
    }
}
