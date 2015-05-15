class Post < ActiveRecord::Base
  validates :title, presence: true, allow_blank: false
  validates :content, presence: true, allow_blank: false

  has_many :comments
  belongs_to :admin
end
