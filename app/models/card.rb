class Card < ApplicationRecord
    belongs_to :deck

    scope :to_study, -> { where('show_next < ?', Time.zone.now) }
    
    def set_show_next
        case self.curr_streak
        when 0..1
            self.show_next = Time.zone.now + 5.minutes
        when 2
            self.show_next = Time.zone.now + 1.day
        when 3
            self.show_next = Time.zone.now + 1.week
        when 4
            self.show_next = Time.zone.now + 2.weeks
        else
            self.show_next = Time.zone.now + 1.month
        end
    end


        
end
