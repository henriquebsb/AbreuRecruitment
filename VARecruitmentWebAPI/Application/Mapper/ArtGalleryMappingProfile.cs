using AutoMapper;
using VAArtGalleryWebAPI.Domain.Entities;
using VAArtGalleryWebAPI.WebApi.Models;

namespace VAArtGalleryWebAPI.Application.Mapper
{
    public class ArtGalleryMappingProfile : Profile
    {
        public ArtGalleryMappingProfile()
        {
            CreateMap<ArtGallery, CreateArtGalleryRequest>().ReverseMap();
            CreateMap<ArtGallery, CreateArtGalleryResult>().ReverseMap();
        }
    }
}
