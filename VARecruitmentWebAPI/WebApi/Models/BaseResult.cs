namespace VAArtGalleryWebAPI.WebApi.Models
{
    public class BaseResult(string msg)
    {
        public string Messagem { get; private set; } = msg;
    }
}
