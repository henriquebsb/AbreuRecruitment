using MediatR;
using VAArtGalleryWebAPI.Application.Mapper;
using VAArtGalleryWebAPI.Domain.Entities;
using VAArtGalleryWebAPI.Domain.Interfaces;
using VAArtGalleryWebAPI.WebApi.Models;

namespace VAArtGalleryWebAPI.Application.Commands
{
    public class CreateArtGalleryCommandHandler(IArtGalleryRepository artGalleryRepository) : IRequestHandler<CreateArtGalleryCommand, CreateArtGalleryResult>
    {
        public async Task<CreateArtGalleryResult> Handle(CreateArtGalleryCommand request, CancellationToken cancellationToken)
        {
            try
            {
                var artGalleryEntity = ArtGalleryMapper.Mapper.Map<ArtGallery>(request);

                var newArtGallery = await artGalleryRepository.CreateAsync(artGalleryEntity);

                var artGalleryResponse = ArtGalleryMapper.Mapper.Map<CreateArtGalleryResult>(newArtGallery);

                return artGalleryResponse;
            }
            catch (Exception exp)
            {
                throw (new ApplicationException(exp.Message));
            }
        }
    }
}