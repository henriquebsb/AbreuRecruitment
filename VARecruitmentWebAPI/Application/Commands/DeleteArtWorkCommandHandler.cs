using MediatR;
using VAArtGalleryWebAPI.Application.Queries;
using VAArtGalleryWebAPI.Domain.Entities;
using VAArtGalleryWebAPI.Domain.Interfaces;
using VAArtGalleryWebAPI.WebApi.Models;

namespace VAArtGalleryWebAPI.Application.Commands
{
    public class DeleteArtWorkCommandHandler(IArtWorkRepository artWorkRepository) : IRequestHandler<DeleteArtWorkCommand, BaseResult>
    {
        public async Task<BaseResult> Handle(DeleteArtWorkCommand request, CancellationToken cancellationToken)
        {
            try
            {
                await artWorkRepository.DeleteAsync(request.Id);
            }
            catch (Exception exp)
            {
                throw (new ApplicationException(exp.Message));
            }

            return new BaseResult("Boleto excluido com sucesso");
        }
    }
}
