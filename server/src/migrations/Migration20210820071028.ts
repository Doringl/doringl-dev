import { Migration } from '@mikro-orm/migrations';

export class Migration20210820071028 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" add column "user_type" text null;');
  }

}
