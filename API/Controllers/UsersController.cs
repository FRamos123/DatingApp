using API.Data;
using API.DTO;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
   
[Authorize]
    public class UsersController : BaseApiController
    {
        private readonly IUserRepository _userRepository;
        public IMapper _mapper { get; }

        public UsersController(IUserRepository userRepository, IMapper mapper)
        {
            _mapper = mapper;
            _userRepository = userRepository;

        }
     
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
        {
            var users= await _userRepository.GetMembersAsync();
            

            return Ok(users);
            
        }

        [HttpGet("{username}")] // api/users/3
        public async Task<ActionResult<MemberDto>> GetUser(string username)
        {
          return await _userRepository.GetMemberAsync(username);
        }
    }
}