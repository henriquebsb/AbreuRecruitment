using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Xml.Linq;
using VAArtGalleryWebAPI.Application.Commands;
using VAArtGalleryWebAPI.Application.Queries;
using VAArtGalleryWebAPI.WebApi.Models;

namespace VAArtGalleryWebAPI.WebApi.Controllers
{
    [Route("api/art-galleries")]
    [ApiController]
    public class ArtGalleryController(IMediator mediator) : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<GetAllArtGalleriesResult>>> GetAllGalleries()
        {
            var galleries = await mediator.Send(new GetAllArtGalleriesQuery());

            var result = galleries.Select(g => new GetAllArtGalleriesResult(g.Id, g.Name, g.City, g.Manager, g.ArtWorksOnDisplay?.Count ?? 0)).ToList();

            return Ok(result);
        }

        [HttpGet("art-works/gallery/{id}")]
        public async Task<ActionResult<List<GetArtGalleryArtWorksResult>>> GetArtGalleryArtWorks(Guid id)
        {
            var gallery = await mediator.Send(new GetArtGalleryArtWorksQuery(id));

            var result = gallery.Select(g => new GetArtGalleryArtWorksResult(g.Id, g.Name, g.Author, g.CreationYear, g.AskPrice)).ToList();

            return Ok(result);
        }


        [HttpPost]
        public async Task<ActionResult<CreateArtGalleryResult>> Create([FromBody] CreateArtGalleryRequest request)
        {
            var result = await mediator.Send(new CreateArtGalleryCommand(request.Name, request.City, request.Manager));
            return Ok(result);
        }
    }
}
