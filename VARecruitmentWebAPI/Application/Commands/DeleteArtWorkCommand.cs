using MediatR;
using VAArtGalleryWebAPI.WebApi.Models;

namespace VAArtGalleryWebAPI.Application.Commands
{
    public sealed class DeleteArtWorkCommand : IRequest<BaseResult>
    {
        public Guid Id { get; private set; }

        public DeleteArtWorkCommand(Guid Id)
        {
            this.Id = Id;
        }
    }
}
