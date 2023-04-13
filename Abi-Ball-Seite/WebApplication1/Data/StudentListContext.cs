using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AbiBall.Models;

namespace AbiBall.Data
{
    public class StudentListContext : DbContext
    {
        public StudentListContext (DbContextOptions<StudentListContext> options)
            : base(options)
        {
        }

        public DbSet<AbiBall.Models.Student> Student { get; set; } = default!;
    }
}
