#include "tzfe.hpp"

// void tzfe::login(login_struct payload) {
//   auto vaccount = payload.vaccount;
//   require_vaccount(vaccount);

//   // Create a record in the table if the player doesn't exist in our app yet
//   auto user_iterator = _users.find(vaccount.value);
//   if (user_iterator == _users.end()) {
//     user_iterator = _users.emplace(vaccount,  [&](auto& new_user) {
//       new_user.vaccount = vaccount;
//     });
//   }
// }

// void tzfe::startgame(user_struct payload){
//   auto vaccount = payload.vaccount;
//   require_auth(vaccount);

//   auto& user = _users.get(vaccount.value, "User doesn't exist");

//   _users.modify(user, vaccount, [&](auto& modified_user) {
//     gameState game_data;

//     modified_user.current_game = game_data;
//   });
// }

// void tzfe::savegame(user_struct payload){
//   auto vaccount = payload.vaccount;
//   require_auth(vaccount);

//   auto& user = _users.get(vaccount.value, "User doesn't exist.");

//   _users.modify(user, vaccount, [&](auto& modified_user) {
//     modified_user.current_game = payload.game_data;
//   });
// }

void tzfe::endgame(user_struct payload){
  auto vaccount = payload.vaccount;
  require_vaccount(vaccount);

  auto user_iterator = _users.find(vaccount.value);
  if (user_iterator == _users.end()) {
    user_iterator = _users.emplace(vaccount, [&](auto& new_user) {
      new_user.vaccount = payload.vaccount;
      new_user.best_score = payload.score;
    });
    //sort_rank(payload.date, payload.vaccount, payload.score);
  }
  else {
    auto& user = _users.get(vaccount.value, "User doesn't exist.");

    _users.modify(user, vaccount, [&](auto& modified_user) {
      if (payload.score > modified_user.best_score)
      {
        modified_user.best_score = payload.score;
        //sort_rank(payload.date, payload.vaccount, payload.score);
      }
    });
  }
}

void tzfe::login(login_struct payload) {
  auto vaccount = payload.vaccount;
  require_vaccount(vaccount);
  auto user_iterator = _users.find(vaccount.value);
  if (user_iterator == _users.end()) {
    user_iterator = _users.emplace(vaccount,  [&](auto& new_user) {
      new_user.vaccount = vaccount;
    });
  }
}

void tzfe::sortrank(user_struct payload){
  auto vaccount = payload.vaccount;
  require_vaccount(vaccount);

  // auto charts_iterator = _charts.begin();
  auto charts_iterator = _charts.find(payload.date);

  if (charts_iterator == _charts.end()) {
    rank data;
    data.vaccount = payload.vaccount;
    data.score = payload.score;
    charts_iterator = _charts.emplace(_self, [&](auto &chart) {
      chart.date = payload.date;
      chart.top.push_back(data);
    });
  } else{
    auto& chart = _charts.get(payload.date, "Charts doesn't exist.");
    rank data;
    data.vaccount = payload.vaccount;
    data.score = payload.score;
    _charts.modify(chart, _self, [&](auto &s) {
      s.top.push_back(data);
    });
  }
}

// tzfe::gameState tzfe::continuegame(user_struct payload){
//   auto vaccount = payload.vaccount;
//   require_auth(vaccount);


//   // Create a record in the table if the player doesn't exist in our app yet
//   auto user_iterator = _users.find(vaccount.value);
//   if (user_iterator != _users.end()) {
//     if(user_iterator->current_game.flag_continue == true){
//       return user_iterator->current_game;
//     };
//   }
// }