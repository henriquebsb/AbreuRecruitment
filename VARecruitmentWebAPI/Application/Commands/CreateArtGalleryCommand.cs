using MediatR;
using VAArtGalleryWebAPI.WebApi.Models;

namespace VAArtGalleryWebAPI.Application.Commands
{
    public sealed class CreateArtGalleryCommand : CreateArtGalleryRequest, IRequest<CreateArtGalleryResult>
    {
        public CreateArtGalleryCommand(string name, string city, string manager) : base(name, city, manager)
        {
        }
    }
}
