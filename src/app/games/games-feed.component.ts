import { Game, GameCategory } from './games-feed.types';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesfeedService } from './games-feed.service';
import { first } from 'rxjs/operators';
import { untilDestroyed } from '@app/shared/until-destroyed';

@Component({
  selector: 'jg-games',
  templateUrl: './games-feed.component.html',
  styleUrls: ['./games-feed.component.scss'],
})
export class GamesFeedComponent implements OnInit, OnDestroy {
  numb = 123123;
  games: Game[] = [];
  currentCategory: GameCategory;
  gameCategories = Object.values(GameCategory);

  constructor(private route: ActivatedRoute, private service: GamesfeedService, private readonly router: Router) {}

  async ngOnInit() {
    this.route.params.pipe(untilDestroyed(this)).subscribe(params => {
      const isValidCategory = this.gameCategories.includes(params['gameType']);
      if (!isValidCategory) {
        this.router.navigate(['/games', 'new']);
      }
    });

    const [games, jackpots] = await Promise.all([
      this.service.fetchGameList().pipe(first()).toPromise(),
      this.service.fetchJackpots().pipe(first()).toPromise(),
    ]);

    const gameIdsWithJackpot: Record<string, number> = jackpots.reduce(
      (accumulator, jackpot) => ({
        ...accumulator,
        [jackpot.game]: jackpot.amount,
      }),
      {},
    );

    this.games = games.map(game => ({
      ...game,
      jackpot: gameIdsWithJackpot[game.id],
    }));
  }

  ngOnDestroy() {
    // ngOnDestroy is needed for untilDestroyed
  }
}
