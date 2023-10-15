using Microsoft.AspNetCore.Mvc;
using Exercise6.Models;
public class HomeController : Controller
{
    // Display the form
    public ActionResult Index()
    {
        return View();
    }

    // Handle form submission
    [HttpPost]
    public ActionResult Index(DataModel dataModel)
    {
        return RedirectToAction("DataPage", dataModel);
    }

    // Display the submitted data
    public ActionResult DataPage(DataModel dataModel)
    {
        return View(dataModel);
    }
}