import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home').then(m => m.Home)
  },
  {
    path: 'videos',
    loadComponent: () => import('./components/video-list/video-list').then(m => m.VideoList)
  },
  {
    path: 'videos/:id',
    loadComponent: () => import('./components/video-detail/video-detail').then(m => m.VideoDetail)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
