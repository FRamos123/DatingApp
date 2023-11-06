import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';
import { GalleryModule, Gallery, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-member-detail',
  standalone: true,
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss'],
  imports: [CommonModule, TabsModule, GalleryModule]
})
export class MemberDetailComponent implements OnInit {
  member: Member | undefined;
  images: GalleryItem[] = [];
  constructor(private memberService: MembersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadmember();
  }
  loadmember() {
    const username = this.route.snapshot.paramMap.get('username');
    if (!username) return;
    this.memberService.getMember(username).subscribe({
      next: (member) => {
        this.member = member;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  getImages(){
    if(!this.member) return;
    for(const photo of this.member.photos){
      this.images.push(new ImageItem({src: photo?.url, thumb: photo?.url}));
      this.images.push(new ImageItem({src: photo?.url, thumb: photo?.url}));
    }
  }



}
